$BASE = "C:\Users\ADMIN\.gemini\antigravity\brain\9353e06e-e0c8-4511-be79-4f52a5953238\.system_generated\steps"
$CWD = "C:\Users\ADMIN\OneDrive\Desktop\Morgage\Mortgage\mortgage"

$map = @(
    @{slug="home"; step="788"},
    @{slug="about-us"; step="747"},
    @{slug="contact-us"; step="790"},
    @{slug="client-mortgage-reviews"; step="794"},
    @{slug="job-opportunities"; step="796"},
    @{slug="fha-home-loans-arizona"; step="753"},
    @{slug="conventional-home-loans-arizona"; step="757"}
)

foreach ($item in $map) {
    $inputPath = "$BASE\$($item.step)\content.md"
    if (Test-Path $inputPath) {
        Write-Host "Parsing $($item.slug)..."
        node "$CWD\fetch_and_parse.js" $item.slug $inputPath
    } else {
        Write-Host "MISSING: $($item.slug) (step $($item.step))"
    }
}
Write-Host "Done."
