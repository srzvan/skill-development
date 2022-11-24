# Redux Saga

- Ce reprezintă `stack frame`-ul?
- Ce înseamnă `current stack frame`?
- Ce este un `saga`?

## Effects

- Ce este un efect?
  - Un efect este un obiect care descrie o instrucțiune (e.g. executarea unei funcții asincrone, `dispatch` unei acțiuni către `store`, etc.) ce va fi executată de `saga middleware`

## Effect creators

- Ce este un `effect creator`?
  - Un `effect creator` este o funcție al cărei apel va crea și transmite către `saga middleware` un obiect ce conține instrucțiuni. Aceste instrucțiuni vor fi executate de către `middleware`
- Care este scopul funcției `take`?
  - Funcția `take` este folosită pentru a transmite `middleware`-ului să aștepte un anumit tip/anumite tipuri de acțiuni să fie `dispatched` către `store`. Totodată, funcția de tip generator care conține apelul `take` va fi suspendată în tot acest timp
- Care este rolul acțiunii `END`?
- Care este scopul funcției `put`?
  - Funcția `put` este folosită pentru a transmite `middleware`-ului să facă un `dispatch` cu o acțiune de un anumit tip către `store`
  - **Important**: dacă `store`-ul Redux conține alt/alte `middleware` asincrone, acestea pot întârzia `dispatch`-ul respectivei acțiuni
- Care este scopul funcției `call`?
- Ce este un `channel`?
- Câte tipuri de `channel` există?
- Ce înseamnă `buffering`?
- Câte de tipuri de `buffering` există?

## Meetings

- Care este diferența între `take` și `takeEvery`?
  - apelul funcției `take` va suspenda funcția generator în care se află până când o acțiune de tipul `pattern`. `takeEvery` va face `spawn` la câte un `saga` (al doilea parametru) de fiecare dată când o acțiune de tipul `pattern` (primul parametru) va fi `dispatched` către `store`.
