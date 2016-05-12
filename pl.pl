% [app]lication
app('decl').
about("Prolog-powered [decl]arative template translator").

author("Dmitry Ponyatov <dponyatov@gmail.com>").

github(GitHub) :- 
	app(Application),
	atom_concat('https://github.com/ponyatov/',Application,GitHub).

%file('Makefile').		% build script
%file('.gitignore').		% ignore produced & temp files 
%file('ypp.ypp').		% syntax parser for configs & user scripts
%file('lpp.lpp').		% syntax lexer
%file('hpp.hpp').		% C++ core headers
%file('cpp.cpp').		% C++ core code

% README.md

file('README.md',Contents) :-
	app(Application), about(About), author(Author), github(GitHub),
	swritef(Contents,'# %w\n### %s\n\n(c) %s\n\ngithub: %w\n',[
		Application,About,Author,GitHub]).
		
% write files

write_files :- app(Application),file(FileName,Contents),
	atom_concat(Application,'/',AppSl),
	atom_concat(AppSl,FileName,FullFileName),
	write(FullFileName),nl,
	open(FullFileName,write,FileHandle),
		write(FileHandle,Contents),
	close(FileHandle),
	fail.
	
:- initialization(write_files).
