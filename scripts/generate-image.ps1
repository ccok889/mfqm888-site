param(
    [Parameter(Mandatory = $true)][string]$Prompt,
    [Parameter(Mandatory = $true)][string]$Output,
    [string]$Model = 'gpt-image-2.5',
    [ValidateSet('high','medium','low','auto')][string]$Quality = 'high'
)
$ErrorActionPreference = 'Stop'
$profileDir = [Environment]::GetFolderPath('UserProfile')
$generator = Join-Path $profileDir 'Documents\Codex\apinebula-image\generate_image.py'
$pythonRuntime = Join-Path $profileDir '.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe'
if (!(Test-Path -LiteralPath $generator)) { throw "Missing local API adapter: $generator" }
if (!(Test-Path -LiteralPath $pythonRuntime)) {
    $pythonCommand = Get-Command python -ErrorAction Stop
    $pythonRuntime = $pythonCommand.Source
}
$projectRoot = Split-Path $PSScriptRoot -Parent
$destination = if ([IO.Path]::IsPathRooted($Output)) { [IO.Path]::GetFullPath($Output) } else { [IO.Path]::GetFullPath((Join-Path $projectRoot $Output)) }
if (!$destination.StartsWith($projectRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
    throw 'Output must stay inside the project directory.'
}
if (Test-Path -LiteralPath $destination) { throw 'Output already exists; choose a new filename.' }
if ($Model -eq 'gpt-image-2-1k') { throw 'gpt-image-2-1K is a token group, not the image model. Use gpt-image-2.5.' }
& $pythonRuntime $generator --model $Model --quality $Quality --prompt $Prompt --output $destination
if ($LASTEXITCODE -ne 0) { throw 'Image task failed. Preserve any reported task ID; do not automatically resubmit.' }
if (!(Test-Path -LiteralPath $destination)) { throw 'API adapter did not save an image.' }
Write-Output "Saved image: $destination"
