# benchmark eslint import resolvers

## both resolvers

| Rule                 | Time (ms) | Relative |
| :------------------- | --------: | -------: |
| import/namespace     |  3849.232 |    77.5% |
| import/no-unresolved |   358.748 |     7.2% |
| import/no-duplicates |   358.403 |     7.2% |

## import-resolver-typescript only

| Rule                 | Time (ms) | Relative |
| :------------------- | --------: | -------: |
| import/namespace     |  3547.126 |    76.3% |
| import/no-unresolved |   355.568 |     7.6% |
| import/no-duplicates |   345.663 |     7.4% |
