# Redux Saga

## The what

### Ce este _Redux saga_?

[_Redux saga_](https://redux-saga.js.org/) este un `middleware` pentru _Redux_ ce are rolul de a facilita scrierea logicii care conține _side effects_ într-un layer separat de cel pe care se află UI-ul.

O regulă prezentă în documentația Redux menționeză că funcțiile de tip _reducer_ nu trebuie să conțină _side effects_. Astfel, nevoia unui layer unde poate exista cod care produce _side effects_ devine evidentă.

O alternativă este [_thunks_](https://redux.js.org/usage/writing-logic-thunks).

- Care sunt beneficiile pe care le aduce _Redux Saga_?

  - High testability
    - Dat fiind faptul că fiecare _saga_ emite obiecte de tip `effect` ce conțin instrucțiuni ce trebuie executate de către `middleware`-ul asociat, testele pentru acest tip de funcții este ușor de implementat
  -

#### Tradeoffs

- Complexitate ridicată
  - Funcțiile de tip generator sunt un concept avansat al limbajului JavaScript iar implementarea _saga_-urilor necesită înțelegerea acestuia
- Performanță
  - Depinzând de use case, perfomanța poate fi afectată de modul în care funcționează funcțiile de tip generator ([some insight](https://stackoverflow.com/a/70672133/9080110))
- Steep learning curve
  - Înțelegerea și folosirea API-ului librăriei într-un mod eficient poate necesita o perioadă de timp mai mare comparativ cu alternativele (e.g. _redux thunk_)
- Bundle size - 27-Dec-2022

  - [`redux-saga` bundlephobia report](https://bundlephobia.com/package/redux-saga@1.2.2)
  - [`redux-thunk` bundlephobia report](https://bundlephobia.com/package/redux-thunk@2.4.2)

- Ce este un _side effect_?

  - Un _side effect_ reprezintă orice schimbare a stării sau comportamentului care poate fi observat în afara contextului execuției unei funcții. Câteva exemple sunt: afișarea unei valori în consolă, salvarea unui fișier, pornirea unui timer asincron, modificarea unei stări care există înafara contextului unei funcții sau mutația argumentelor funcției, execuția unui request AJAX HTTP, generarea valorilor aleatorii

- Ce este un `middleware`?

  - Un `middleware` reprezintă un modul ce facilititează execuția codului într-o fereastră de timp plasată **după** ce o _acțiune_ a fost emisă către _store_, dar **înainte** ca aceasta să ajungă la o funcție de tip _reducer_, să fie procesată și starea să fie actualizată. Implementarea este realizată printr-o funcție de ordin superior care compune funcția `dispatch` cu scopul de a augmenta comportamentul acesteia din urmă. Use-case-urile principale sunt: centralizarea comportamentului aplicației (e.g. logging, analytics) și posibilitatea de a introduce logică de tip asincron în `store` într-un mod flexibil (control asupra sintaxei și API-urilor folosite).

- Ce este modelul _watcher/worker saga_?
  - Acest model reprezintă un mod de organizare a fluxului de control și este bazat pe două tipuri de funcții saga:
    - _Watcher_ - creează câte un _task_ ce rulează un _worker_ (numit și _handler_) de fiecare dată când interceptează o _acțiune_ de un anumit tip
    - _Worker_ - interpretează acțiunea respectivă și își termină execuția
- Ce reprezintă `stack frame`-ul?
- Ce înseamnă `current stack frame`?
- Ce este un _saga_?

## The how - API

### Glosar

### Effects

- Ce este un `effect`?
  - Un `effect` este un obiect care descrie o instrucțiune (e.g. executarea unei funcții asincrone, `dispatch` unei acțiuni către `store`, etc.) ce va fi executată de `saga middleware`

### Effect creators

- Ce este un `effect creator`?
  - Un `effect creator` este o funcție al cărei apel va crea și transmite către `saga middleware` un obiect ce conține instrucțiuni. Aceste instrucțiuni vor fi executate de către `middleware`-ul asociat.
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
  - apelul `take(pattern)` va suspenda funcția generator în care se află până când o acțiune de tipul `pattern` va fi `dispatch`ed către `store`. `takeEvery(pattern, sagaFunction)` va face `spawn` la câte un `sagaFunction` de fiecare dată când o acțiune de tipul `pattern` va fi `dispatched` către `store`.
