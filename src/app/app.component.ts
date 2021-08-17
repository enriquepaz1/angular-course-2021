import { Component, Input } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'anddgular2021';
  myStatus = 'my status';
  color: string;

   @Input()name1:string='juan';
   @Input()lastName1:string='gutierrez';
  sw = true;
  personASub: Subscription;
  video = 1;
  tictock = new BehaviorSubject(this.video);
  constructor() {
    //persona A
    this.tictock.pipe(filter(s => s % 2 === 0)).subscribe(v => {
      console.log('VIDEO A ', v);
    });
    //persona B
    this.tictock.subscribe(v => {
      console.log('VIDEO B', v);
    });
    //persona C
    this.tictock.subscribe(v => {
      console.log('VIDEO C', v);
    });

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

    const testEntries = { value: 'ricardo', key: 'RPC' };
    console.log(Object.entries(testEntries));
    //[['value','ricardo'],['key','RPC']]

    //nombre del campo [value, key ]
    const testKey = { value: 'ricardo', key: 'RPC' };
    console.log(Object.keys(testKey));
    console.log('ccc', Object.values(testEntries));

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

    //{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los numeros pares

    const a = { 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a' };
    const b = Object.keys(a)
      .map(n => parseInt(n))
      .reduce((acc, value) => {
        if (value % 2 === 0) {
          acc = acc + value;
        }
        return acc;
      }, 0);

    console.log('aaa', b);

    //[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena
    console.log('aaa=', [1, 2, 3, 4, 5, 6].filter(s => s % 2 !== 0).join(','));
  }
  printDataEnriqueComp(event: any) {
    console.log('enriqeu comp:', event);
  }

  printData(event) {
    console.log('CHILD COMP SEND DATA: ', event);
  }

  onAddVideo() {
    this.video++;
    this.tictock.next(this.video);
  }
  personUnsubscribe() {
    this.personASub.unsubscribe();
    console.log('PERSONA A SE DESUSCRIBE');
  }

test(event){
 console.log('AAA',event);

}



}



