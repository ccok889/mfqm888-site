$ErrorActionPreference='Stop'
$repo=Split-Path $PSScriptRoot -Parent
$items=Get-Content (Join-Path $PSScriptRoot 'news-20261116.json') -Raw | ConvertFrom-Json | Sort-Object {if($_.slug -eq 'wuhan'){1}else{0}}
foreach($item in $items){
 $slug=if($item.slug -eq 'main'){'handwriting-comparison'}else{$item.slug}
 if(Test-Path -LiteralPath (Join-Path $repo "assets/images/news-$slug-20261116.png")){continue}
 $scene=$item.scene
 if($item.slug -eq 'wuhan'){$scene='Two ordinary ballpoint pens, one blue and one black, beside an open personal notebook with indistinct small handwriting. Overhead still life on a light gray desk.'}
 $prompt='Editorial photograph for an article about handwritten document observation. '+$scene+'. Landscape composition, natural paper texture, no real names, no logos, no watermark.'
 if($item.slug -eq 'wuhan'){$prompt='Photograph: two ballpoint pens with blue and black caps lie across a lined notebook on a pale wooden desk. A few small handwriting marks appear on the notebook. Horizontal composition. Natural daylight. Realistic stationery still life.'}
 "Starting $slug" | Tee-Object -FilePath (Join-Path $PSScriptRoot 'image-tasks-20261116.log') -Append
 & (Join-Path $PSScriptRoot 'generate-image.ps1') -Prompt $prompt -Output "assets/images/news-$slug-20261116.png" -Model 'gpt-image-2.6' -Quality medium | Tee-Object -FilePath (Join-Path $PSScriptRoot 'image-tasks-20261116.log') -Append
}
