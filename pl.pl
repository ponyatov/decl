file('README.md').		% README
file('Makefile').		% build script
file('.gitignore').		% ignore produced & temp files 
file('ypp.ypp').		% syntax parser for configs & user scripts
file('lpp.lpp').		% syntax lexer
file('hpp.hpp').		% C++ core headers
file('cpp.cpp').		% C++ core code

wr :- file(X),
	atom_concat('decl/',X,Y),
	write(Y),nl,
	open(Y,update,Z),close(Z),
	fail.

:- initialization(wr).
