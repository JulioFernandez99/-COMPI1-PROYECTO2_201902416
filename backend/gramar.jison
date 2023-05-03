
<INICIO>: <OPCIONESCUERPO> <EOF>;

<OPCIONESCUERPO>: <OPCIONESCUERPO> <CUERPO>
            |<CUERPO>;

<CUERPO>: <DEC_VAR> <ptcoma> 
        |<ASIG_VAR> <ptcoma>
        |<METODOS> 
        |<MAIN>  
        |<FUNCIONES>;

<METODOS>: 
        <Rvoid> <identificador> <parA> <parC> <llaveA> <INSTRUCCIONES> <llaveC>
        |<Rvoid> <identificador> <parA> <LIST_PARAMETROS> <parC> <llaveA> <INSTRUCCIONES> <llaveC>;

<LIST_PARAMETROS>: <LIST_PARAMETROS> <coma> <PARAMETROS>  
        |<PARAMETROS>;

<PARAMETROS>: <TIPO> <identificador>;

<MAIN>: 
      <Rmain> <identificador> <parA> <parC> <ptcoma>
      |<Rmain> <identificador> <parA> <PARAMETROS_LLAMADA> <parC> <ptcoma>;



<PARAMETROS_LLAMADA>: <PARAMETROS_LLAMADA> <coma> <EXPRESION>
                |<EXPRESION>;


<DEC_VAR>: 
        <TIPO> <identificador>
        |<TIPO> <identificador> <igual> <EXPRESION>
        |<TIPO> <identificador> <igual> <parA> <TIPO> <parC> <EXPRESION>
        |<TIPO> <corchA> <corchC> <identificador> <igual> <Rnew> <TIPO> <corchA> <EXPRESION> <corchC> 
        |<TIPO> <corchA> <corchC> <identificador> <igual> <llaveA> <ELEMENTOS_ARRAY> <llaveC> 
        |<Rlist> <menor> <TIPO> <mayor> <identificador> <igual> <Rnew> <Rlist> <menor> <TIPO> <mayor>
        |<Rlist> <menor> <TIPO> <mayor> <identificador> <igual> <Rtochararray> <parA> <EXPRESION> <parC>;

<ELEMENTOS_ARRAY>: <ELEMENTOS_ARRAY> <coma> <EXPRESION> 
                |<EXPRESION> 
;

<ASIG_VAR>: 
        <identificador> <igual> <EXPRESION> 
        |<identificador> <masmas>
        |<identificador> <menosmenos>
        |<identificador> <suma> <EXPRESION>
        |<identificador> <menos> <EXPRESION>;
<TIPO>: <Rint>
    |<Rdouble>
    |<Rchar> 
    |<Rboolean>
    |<Rstring>;

<INSTRUCCIONES>: <INSTRUCCIONES> <INSTRUCCION>
            |<INSTRUCCION>;

<INSTRUCCION>: <DEC_VAR> <ptcoma>
        |<ASIG_VAR> <ptcoma> 
        |<PRINT> 
        |<IF> 
        |<FOR>  
        |<while>  
        |<DO>
        |<SWITCH>  
        |<LLAMADAS> ptcoma>  
        |<RETURN> ptcoma>  
        |<MODIFICAR_POSARRAY> ptcoma>  
        |<ADDLISTA> ptcoma>  
        |<MODIFICARLISTA> ptcoma> 
;

<FUNCIONES>:
        <TIPO> <identificador> <parA> <LIST_PARAMETROS> <parC> <llaveA> <INSTRUCCIONES> <llaveC>
        |<TIPO> <identificador> <parA> <parC> <llaveA> <INSTRUCCIONES> <llaveC> ;

<LLAMARFUNCION>:
        <identificador> <parA> <parC> <ptcoma>
        |<identificador> <parA> <PARAMETROS_LLAMADA> <parC> <ptcoma>;


<LLAMADAS>:
        <identificador> <parA> <parC>
        |<identificador> <parA> <PARAMETROS_LLAMADA> <parC>;

<MODIFICARLISTA>:
        <identificador> <corchA> <corchA> <EXPRESION> <corchC> <corchC> <igual> <EXPRESION>;

<ADDLISTA>:
        <identificador> <punto> <Radd> <parA> <EXPRESION> <parC>;

<MODIFICAR_POSARRAY>:
        <identificador> <corchA> <EXPRESION> <corchC> <igual> <EXPRESION>;

<RETURN>:<Rreturn> <EXPRESION>;

<IF>: <Rif> <parA> <EXPRESION> <parC> <llaveA> <INSTRUCCIONES> <llaveC> 
        |<Rif> <parA <EXPRESION> <parC> <llaveA> <INSTRUCCIONES> <llaveC> <Relse> <llaveA> <INSTRUCCIONES> <llaveC> 
        | <Rif> <parA> <EXPRESION> <parC> <llaveA> <INSTRUCCIONES>  <llaveC> <ELSEIF>  
        | <Rif> <parA> <EXPRESION> <parC> <llaveA> <INSTRUCCIONES> <llaveC> <ELSEIF> <Relse> <llaveA> <INSTRUCCIONES> <llaveC>;

<ELSEIF>:<ELSEIF> <CONEIF>
      | <CONEIF>; 

<CONEIF>: <Relse> <Rif> <parA> <EXPRESION> <parC> <llaveA> <INSTRUCCIONES> <llaveC>;

<FOR>:
        <Rfor> <parA> <DEC_VAR> <ptcoma> <EXPRESION> <ptcoma> <ASIG_VAR> <parC> <llaveA> <INSTRUCCIONES> <llaveC>
        |<Rfor> <parA> <ASIG_VAR> <ptcoma> <EXPRESION> <ptcoma> <ASIG_VAR> <parC> <llaveA> <INSTRUCCIONES> <llaveC> ;

<while>:
        <Rwhile> <parA> <EXPRESION> <parC> <llaveA> <INSTRUCCIONES> <llaveC>;

<DO>: <Rdo> <llaveA> <INSTRUCCIONES> <llaveC> <Rwhile> <parA> <EXPRESION> <parC> <ptcoma>;

<SWITCH>:
        <Rswitch> <parA> <EXPRESION> <parC> <llaveA> <CASES> <llaveC>;

<CASES>:<CASES> <CASE> 
     |<CASE>;

<CASE>:
        <Rcase> <EXPRESION> <dospuntos> <INSTRUCCIONES> <Rbreak> <ptcoma>
        |<Rdefault> <dospuntos> <INSTRUCCIONES> <Rbreak> <ptcoma>;


<PRINT>: <Rprint> <parA> <EXPRESION> <parC> <ptcoma>;

<EXPRESION: <EXPRESION> <suma> <EXPRESION>
         | <EXPRESION> <menos> <EXPRESION> 
         | <EXPRESION> <multi> <EXPRESION>
         | <EXPRESION> <div> <EXPRESION>
         | <EXPRESION> <exponente> <EXPRESION>
         | <EXPRESION> <modulo> <EXPRESION>
         | <EXPRESION> <menor> <EXPRESION>
         | <EXPRESION> <mayor> <EXPRESION>
         | <EXPRESION> <menorIgual> <EXPRESION>
         | <EXPRESION> <mayorIgual> <EXPRESION>
         | <EXPRESION> <diferente> <EXPRESION>
         | <EXPRESION> <and> <EXPRESION>
         | <EXPRESION> <or> <EXPRESION>
         | <menos> <EXPRESION> <umenos>
         | <not> <EXPRESION>
         | <parA> <EXPRESION <parC>
         | <EXPRESION> <igualigual> <EXPRESION>
         | <decimal>
         | <entero>
         | <Rtrue> 
         | <Rfalse>
         | <string>
         | <identificador>
         | <char> 
         | <EXPRESION> <interrogacion> <EXPRESION> <dospuntos> <EXPRESION>  
         | <identificador> <corchA> <EXPRESION> <corchC> 
         | <Rlower> <parA> <EXPRESION> <parC>
         | <Rup> <parA> <EXPRESION> <parC>
         | <Rlen> <parA> <EXPRESION> <parC>
         | <Rtrunc> <parA> <EXPRESION> <parC>
         | <Rround> <parA> <EXPRESION> <parC>
         | <Rtype> <parA> <EXPRESION> <parC>
         | <RtoString> <parA> <EXPRESION> <parC>
;