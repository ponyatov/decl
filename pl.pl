app('decl').			% [app]lication

about("Prolog-powered [decl]arative template translator").

file('README.md').		% README
file('Makefile').		% build script
file('.gitignore').		% ignore produced & temp files 
file('ypp.ypp').		% syntax parser for configs & user scripts
file('lpp.lpp').		% syntax lexer
file('hpp.hpp').		% C++ core headers
file('cpp.cpp').		% C++ core code

write_files :- app(Application),file(FileName),
	atom_concat(Application,'/',AppSl),
	atom_concat(AppSl,FileName,FullFileName),
	write(FullFileName),nl,
%	open(Y,update,Z),close(Z),
	fail.
	
readme(Readme) :-
	app(Application),
	atom_concat('# ',App,Readme).

%:- initialization(write_files).
:- initialization(readme(X)).
