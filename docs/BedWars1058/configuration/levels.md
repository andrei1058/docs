```yaml
# Levels list
# You can add more levels under 4. Just copy and paste level 4 and rename it to level 5.
# Or if you just want a custom cost for level 20 for example, add it to the list and the cost
# for levels between 4 and 20 will be taken from 'others' and the cost for level 21 will be taken from 20.
levels:
  # Level 1
  '1':
    # Level display name
    name: '&a{number} ✩ '
    # Cost in xp to rank up to level 2
    rankup-cost: 1000
  '2':
    name: '&a{number} ✩ '
    rankup-cost: 2000
  '3':
    name: '&a{number} ✩ '
    rankup-cost: 3000
  '4':
    name: '&a{number} ✩ '
    rankup-cost: 3500
  #You can create a configuration for a closed range of levels.
  #Levels from 5 to 10 will use this.
  5-10:
    name: '&6{number} ✩ '
    rankup-cost: 3900
  # This option is for levels without a specific configuration.
  others:
    name: '&d{number} ✩ '
    rankup-cost: 5000

# Xp rewards configuration
# Use O or -1 to disable
xp-rewards:
  # How much xp should players receive per minute
  per-minute: 10
  # How much xp should players receive per teammate at the end of the game
  per-teammate: 5
  # How much xp should players receive if they win the game
  game-win: 100

# Progress bar configuration
progress-bar:
  # Progress symbol to be repeated
  symbol: ■
  # Color for unlocked repeated symbol
  unlocked-color: '&b'
  # Color for locked repeated symbol
  locked-color: '&7'
  # Progress bar display format
  format: '&8[{progress}&8]'

```