% ololo

l2s([],L,L).
l2s([H|T],Y,[H|L]) :- l2s(T,Y,L).

%join(_, [X], X) :- !.
%join(Sep, [X | Xs], S) :-
%    join(Sep, Xs, Sx),
%    string_concat(Sep, Sx, Sy),
%    string_concat(X, Sy, S).
%atomic_list_concat    

%lst_to_str([],Y,Y).
%lst_to_str([H|T],Y,T) :-
%	swritef(Y,"%w\n",H), 
%	lst_to_str(T,Y,T).
%
%file('decl/hpp.hpp',Contents) :-
%	lst_to_str([
%		"#ifndef _H_",
%		"#define _H_",
%		"#endif // _H_"
%	],"",Contents).
%
%file('decl/cpp.cpp',Contents) :- swritef(Contents,"#include \"hpp.hpp\"",[]).
%
%write_files :- file(X,Y),open(X,write,F),write(F,Y),close(F),fail.
%
%:- initialization(write_files).