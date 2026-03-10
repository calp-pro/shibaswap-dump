# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;shibaswap-dump

<br>

Static set of addresses (ShibaSwap Ethereum mainnet).<br>
New pairs updates happen every hour at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data: `dump.csv` 135Kb+ 

CSV schema: `id,pair,token0,token1`

## Example:
```
...
10,0x4200b824d4b1118e290767a9f255d53af21fabca,0x6b175474e89094c44da98b954eedeac495271d0f,0x9813037ee2218799597d83d4a5b6f3b6778218d9
...
```
where:
- `10`
  * pair/pool index at factory contract
- `0x4200b824d4b1118e290767a9f255d53af21fabca`
  * BONE/DAI AMM [contract](https://etherscan.io/address/0x4200b824d4b1118e290767a9f255d53af21fabca) address
- `0x6b175474e89094c44da98b954eedeac495271d0f`
  * DAI ERC-20 token [contract](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f) address
- `0x9813037ee2218799597d83d4a5b6f3b6778218d9`
  * BONE ERC-20 token [contract](https://etherscan.io/token/0x9813037ee2218799597d83d4a5b6f3b6778218d9) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined `filename` with value `dump.csv`.

## Usage CLI/API:
```bash
> node -e "require('shibaswap-dump').load().then(pairs => console.log(pairs.length))"
> 1036
```
