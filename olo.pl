% ololo

file('decl/hpp.hpp',Contents) :- swritef(Contents,"",[]).
file('decl/cpp.cpp',Contents) :- swritef(Contents,"#include \"hpp.hpp\"",[]).

write_files :- file(X,Y),open(X,write,F),write(F,Y),close(F),fail.

:- initialization(write_files).