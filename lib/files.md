# files
## project file structure

```
.vscode     // project-local configuration
vscode      // VSCode extension
bin/        // executable binaries & firmware images
doc/        //
    html/   // doxygen-generated reference manual
lib/
    *.md    // treat .md extension as Markdown+Decl (literal programming)
inc/
    *.hpp   // app-specific header files
src/
    *.cpp   // app-specific source code
tmp/        // temporary files (build, log,..)
ref/        // clone other's projects as reference from hithub here
```
```
.clang-format   // C++ code autoformatting
.prettierrc     // JSON/JS  autoformatting
```
```
apt.Debian      // default work system: Debian GNU/Linux 12+
apt.Ubuntu      // for build & use on servers & VMs
apt.Raspbian    // Raspberry Pi deploy
apt.Msys        // MSYS2 dependencies (Windows/MinGW)
```
