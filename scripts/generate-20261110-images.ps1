$ErrorActionPreference='Stop'
$repo=Split-Path $PSScriptRoot -Parent
$items=Get-Content (Join-Path $PSScriptRoot 'news-20261110.json') -Raw | ConvertFrom-Json
$items | ForEach-Object -Parallel {
  $item=$_
  $project=$using:repo
  $slug=if($item.slug -eq 'main'){'handwriting-comparison'}else{$item.slug}
  $prompt='Use case: photorealistic-natural. Asset type: Chinese handwriting editorial article hero. Primary request: '+$item.scene+'. Real paper texture, authentic unidentifiable pen marks. Landscape 1536x1024. No legible names, no logos, no watermark, no city skyline. New distinct composition. The subject is document observation, not a decorative background.'
  & (Join-Path $project 'scripts/generate-image.ps1') -Prompt $prompt -Output "assets/images/news-$slug-20261110.png" -Model 'gpt-image-2.6' -Quality medium
} -ThrottleLimit 3
