$ErrorActionPreference='Stop'
$repo=Split-Path $PSScriptRoot -Parent
$data=Get-Content (Join-Path $PSScriptRoot 'news-20261116.json') -Raw | ConvertFrom-Json | Where-Object {$_.slug -ne 'wuhan'}
$results=@($data | ForEach-Object -Parallel {
 $d=$_
 $articlePath=if($d.slug -eq 'main'){'article/news/handwriting-rhythm-20261116.html'}else{"city/$($d.slug)/$($d.slug)-handwriting-note-20261116.html"}
 $homepagePath=if($d.slug -eq 'main'){'index.html'}else{"city/$($d.slug)/index.html"}
 $imageSlug=if($d.slug -eq 'main'){'handwriting-comparison'}else{$d.slug}
 $row=$null
 for($attempt=1;$attempt -le 2;$attempt++){
  try{
   $a=Invoke-WebRequest ('https://www.mfqm888.com/'+$articlePath) -TimeoutSec 25
   $h=Invoke-WebRequest ('https://www.mfqm888.com/'+$homepagePath) -TimeoutSec 25
   $i=Invoke-WebRequest ('https://www.mfqm888.com/assets/images/news-'+$imageSlug+'-20261116.webp') -Method Head -TimeoutSec 25
   $row=[pscustomobject]@{site=$d.slug;article=$a.StatusCode;title=$a.Content.Contains($d.title);homepage=$h.Content.Contains($d.title);image=$i.StatusCode}
   if($row.title -and $row.homepage){break}
  }catch{$row=[pscustomobject]@{site=$d.slug;error=$_.Exception.Message}}
 }
 $row
} -ThrottleLimit 4)
$results | ConvertTo-Json -Depth 5 | Set-Content (Join-Path $PSScriptRoot 'live-verification-20261116.json') -Encoding utf8
$results | Format-Table -AutoSize
if($results.Count -ne 12 -or @($results | Where-Object {$_.error -or $_.article -ne 200 -or !$_.title -or !$_.homepage -or $_.image -ne 200}).Count){throw 'Not all twelve completed sites verified live'}
'PASS: twelve completed articles, images and homepage entries verified live; Wuhan pending image.'
