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

