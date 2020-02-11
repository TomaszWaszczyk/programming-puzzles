// czym jest monada, jak działa hashmap (szczegóły implementacji), co się dzieje jak ktoś wykonuje połączenie http (coś o http / tcp / dns), pytania o wieloątkowość (monitor w Javie, Future w Scali), pytania o różnice w relacyjnych i niereacyjnych bazach danych, o backpressure w HTTP (zwracanie kodu 409), o batchowanie w Kafce

package com.waszczyk

import java.util.*;

public class A{

    protected static int x = 1;
    protected int y = 1;

    public void foo(){
        System.out.println(x++ + "," + y++);
    }

    public void bar(){
        foo();
    }
}

public class B extends A{
    public void foo(){
        System.out.println(++x + ", " + ++y);
    }
}

class Program{
    public static void main(String[] args){

        A a = new A();
        B b = new B();

        a.foo();
        a.bar();
        b.foo();
        b.bar();

    }
}

