$ErrorActionPreference = 'Stop'
$scenes = @(
  @('beijing','a stack of dated office meeting notes, a pen and a handwritten margin annotation'),
  @('chengdu','a personal notebook with several pages of cursive Chinese handwriting and a plain ruler'),
  @('chongqing','two printouts of the same handwritten page at different scan contrast levels beside a scanner'),
  @('guangzhou','several natural signature samples on separate unbranded sheets and a fountain pen'),
  @('hangzhou','handwritten Chinese character samples arranged next to a computer keyboard for font digitization'),
  @('nanjing','archival folders with dated handwritten comparison samples and a magnifying glass'),
  @('shanghai','a notebook page with long continuous handwriting and a separate short signature slip'),
  @('shenzhen','a smartphone photographing a complete handwritten document on a flat desk'),
  @('suzhou','a business correspondence page with handwritten closing lines and a separate sample card'),
  @('tianjin','handwriting samples written in blue and black ink on different dated sheets'),
  @('wuhan','a desk showing three handwritten lines with varied spacing and writing rhythm'),
  @('xian','an original handwritten letter beside a clearly labelled photocopy and a document sleeve')
)
foreach ($item in $scenes) {
  $slug = $item[0]
  $prompt = "Use case: photorealistic-natural. Asset type: Chinese editorial article hero image. Overhead documentary photograph of $($item[1]). Tangible paper texture and authentic pen marks. Wide landscape composition, natural daylight, no readable text, no logos, no watermark, no decorative city skyline. Each image must have a distinct arrangement and subject."
  & $PSScriptRoot\generate-image.ps1 -Prompt $prompt -Output "assets/images/news-$slug-20261019.png" -Quality medium
}
