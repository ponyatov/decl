author("Dmitry Ponyatov <dponyatov@gmail.com>").

github(X,GitHub) :- 
	atom_concat('https://github.com/ponyatov/',X,GitHub).

app('decl').			% [app]lication

about('decl',"Prolog-powered [decl]arative template translator").

file('README.md').		% README
file('Makefile').		% build script
file('.gitignore').		% ignore produced & temp files 
file('ypp.ypp').		% syntax parser for configs & user scripts
file('lpp.lpp').		% syntax lexer
file('hpp.hpp').		% C++ core headers
file('cpp.cpp').		% C++ core code

readme :-
	app(Application),about(Application,About),
	author(Author),github(Application,GitHub),
	format("# ~s~n### ~s~n~n(c) ~s~n~ngithub: ~s",
		[Application,About,Author,GitHub]),fail.
	%atom_concat('# ',App,Readme).
	
contents('README.md',X) :- X="".

write_files :- app(Application),file(FileName),
	atom_concat(Application,'/',AppSl),
	atom_concat(AppSl,FileName,FullFileName),
	write("write "),write(FullFileName),nl,
	open(FullFileName,write,FileHandle),
		contents(FileName,X),write(FileHandle,X),
	close(FileHandle),
	fail.
	
:- initialization(write_files).
%:- initialization(readme).
