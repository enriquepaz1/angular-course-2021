import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anddgular2021';

  constructor() {
    const testMap = [1, 2, 3, 4, 5, 6].map(item => item * 2);
    console.log(testMap);
    // no devuelve un array el foreach es por eso que dice undefined
    //el map si devuelve un arrray

    const testForEach = [1, 2, 3, 4, 5, 6].forEach(item => item * 2);
    console.log(testForEach);
    //=== si queremos que sea estricto ==por lo general se usa eso
    //y duvuleve un objeto
    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 4);
    console.log(testFind);

    const testFilter = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
    console.log(testFilter);

    //si esta afuera de la posesion es -1 y trabaja solo con array
    const testFindIndex = [90, 2, 3, 4, 5, 6].findIndex(item => item === 90);
    console.log(testFindIndex);
    //trabaja con cadenas y Arrays

    const testIndexOf = [90, 2, 3, 4, 5, 6].indexOf(6);
    console.log(testIndexOf);

    const testIndexOf2 = 'ricardo'.indexOf('a');
    console.log(testIndexOf2);

    //devuelve solo cadenas
    const testJoin = [90, 2, 3, 4, 5, 6].join('-');
    console.log(testJoin);

    const testSplit = '1,2,3,4,5,6'.split(',');
    console.log(testSplit);

    //si lo asignas a una variables saca los elementos
    // si  no muestra todos menos el restante

    const testSpliceA = [10, 20, 30, 40, 50, 60];
    const testSpliceB = [1, 2, 3, 4, 5, 6].splice(1, 2);
    testSpliceA.splice(0, 1);
    console.log(testSpliceB, testSpliceA);

    //acc=0 value=1 100 es valor del acumulador
    const testReduce = [1, 2, 3, 4, 5].reduce((acc, value) => acc + value, 100);
    console.log(testReduce);

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1];

    const per1 = { name: 'a', age: 12 };
    const per2 = { data: 'R', ...per1 };

    console.log('Spread', array2, per2);

    const per3 = {
      name: 'a',
      age: 12,
      phone: 1231221,
      extra: 123,
      response: 200
    };

    const { phone: ci } = per3;
    console.log('name=', ci);
  }
}
