Demonstration of tailwind ppx bug https://github.com/dylanirlbeck/tailwind-ppx/issues/92

```bash
yarn
yarn build
```

example output
```bash
$ yarn build  
yarn run v1.7.0
$ rm -rf .tailwind_ppx_cache && bsb -clean-world && bsb -make-world
Cleaning... 3 files.
[1/300] Building src/Test__1.reast
FAILED: src/Test__1.reast 
/Users/user/test2/my-new-project/node_modules/bs-platform/darwin/bsc.exe  -warn-error +101 -ppx /Users/user/test2/my-new-project/node_modules/@dylanirlbeck/tailwind-ppx/tailwind-ppx -bs-super-errors -o src/Test__1.reast -bs-syntax-only -bs-binary-ast /Users/user/test2/my-new-project/src/Test__1.re
Fatal error: exception End_of_file

  We've found a bug for you!
  /Users/user/test2/my-new-project/src/Test__1.re
  
  Error while running external preprocessor
Command line: /Users/user/test2/my-new-project/node_modules/@dylanirlbeck/tailwind-ppx/tailwind-ppx '/var/folders/zd/w5jysy7j6j1_3z_8wrvcnfvm0000gn/T/ppxfc73d7Test__1.re' '/var/folders/zd/w5jysy7j6j1_3z_8wrvcnfvm0000gn/T/ppx4828e5Test__1.re'

  
[2/300] Building src/Test__2.reast
FAILED: src/Test__2.reast 
/Users/user/test2/my-new-project/node_modules/bs-platform/darwin/bsc.exe  -warn-error +101 -ppx /Users/user/test2/my-new-project/node_modules/@dylanirlbeck/tailwind-ppx/tailwind-ppx -bs-super-errors -o src/Test__2.reast -bs-syntax-only -bs-binary-ast /Users/user/test2/my-new-project/src/Test__2.re
Fatal error: exception End_of_file

  We've found a bug for you!
  /Users/user/test2/my-new-project/src/Test__2.re
  
  Error while running external preprocessor
Command line: /Users/user/test2/my-new-project/node_modules/@dylanirlbeck/tailwind-ppx/tailwind-ppx '/var/folders/zd/w5jysy7j6j1_3z_8wrvcnfvm0000gn/T/ppx143840Test__2.re' '/var/folders/zd/w5jysy7j6j1_3z_8wrvcnfvm0000gn/T/ppxdc35f7Test__2.re'

  
[3/300] Building src/Test__4.reast
FAILED: src/Test__4.reast 
/Users/user/test2/my-new-project/node_modules/bs-platform/darwin/bsc.exe  -warn-error +101 -ppx /Users/user/test2/my-new-project/node_modules/@dylanirlbeck/tailwind-ppx/tailwind-ppx -bs-super-errors -o src/Test__4.reast -bs-syntax-only -bs-binary-ast /Users/user/test2/my-new-project/src/Test__4.re
Fatal error: exception End_of_file

  We've found a bug for you!
  /Users/user/test2/my-new-project/src/Test__4.re
  
  Error while running external preprocessor
Command line: /Users/user/test2/my-new-project/node_modules/@dylanirlbeck/tailwind-ppx/tailwind-ppx '/var/folders/zd/w5jysy7j6j1_3z_8wrvcnfvm0000gn/T/ppx8aef10Test__4.re' '/var/folders/zd/w5jysy7j6j1_3z_8wrvcnfvm0000gn/T/ppx2c00baTest__4.re'

  
[6/300] Building src/Test__5.reast
FAILED: subcommand failed.
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
