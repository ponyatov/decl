app(app).

language(cpp).

type(cpp,int).
type(cpp,float).
type(cpp,string).

var(int,'A').
var(int,'B').

sum(X,Y,Code) :- var(TX,X),var(TY,Y),
	swritef(Code,"%w %w ; %w %w ; %w+%w",[TX,X,TY,Y,X,Y]).

go :- sum(X,Y,Code),write([X,Y,Code]),nl,fail.
:- initialization(go).