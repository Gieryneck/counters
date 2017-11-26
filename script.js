// UWAGA: stanu należy używać tak rzadko jak to tylko możliwe. Jeśli nie musisz - nie twórz stanu. 


var Counters = React.createClass({

    render: function() {

        return(

            React.createElement('div', {},
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter)
            )
        );
    }
});


var Counter = React.createClass({

    getInitialState: function() {
    // metoda getInitialState jest wbudowana w kazda klase
        return(

            {counter: 0}
        );
    },

    increment: function() {

        this.setState({
            //Stan ustawiamy za pomocą wbudowanej metody setState
            counter: this.state.counter + 1 
        });
    },

    decrement: function() {

        this.setState({

            counter: this.state.counter - 1
        });
    },

    render: function() {

        return( React.createElement('div', {className: 'container'},
            React.createElement('button', {onClick: this.increment}, '+'), // onClick !!
            React.createElement('button', {onClick: this.decrement},'-'),
            React.createElement('span', {className: 'counter-display'}, 'Licznik: ' + this.state.counter))
            //state to wbudowany parametr kazdej klasy
            //UWAGA: nie wolno odwoływać się do stanu, który nie ma wartości początkowej. 
        );
    },

    getDefaultProps: function() {

        console.log('getDefaultProps: Gdyby klasa komponentu miała properties, a tworzony komponent nie dostał żadnych wartosci properties narzuconych odgornie, getDefaultProps ustawiloby domyslne wartosci tych propsow');
    },


    componentWillMount: function() {
        
        console.log('componentWillMount: Jesli np chcemy zmienic stany poczatkowe komponentu przed jego wyrenderowaniem a co zaa tym idzie omijamy potrzebe przerenderowania');
    },

    componentDidMount: function() {
        
        console.log('componentDidMount: W tym momencie komponent wyladowal w DOMie, mozemy np pobrac dane z komponentu do serwera(gdybysmy zrobili to moglibysmy zamulac wczytywanie elementu), manipulowac nim w DOM.');
    },

    componentWillReceiveProps: function() {
        
        console.log('componentWillReceiveProps: Metoda ta zostanie wywolana tylko gdy komponent otrzyma nowe properties juz po pierwszym wyrenderowaniu w fazie inicjalizacji. Mozemy dzieki niej zaktualizowac stan na podstawie tych nowych propsow');
    },

    shouldComponentUpdate: function() {
        
        console.log('shouldComponentUpdate: Sprawdza po setState lub setProps(a w konsekwecji componentWillReceiveProps) czy zachodzi potrzeba przerenerowania komponentu po zaistnialych zmianach, zwraca boolean value.');
    },

    componentWillUpdate: function() {
        
        console.log('componentWillUpdate: Jesli shouldComponentUpdate zwraca "true", to natychmiast uruchomiona zostaje componentWillUpdate, ktora pozwala na przygotowanie sie na nadchodzace zmiany, np przeslanie zebranych danych do serwera przed resetem komponentu');
      
    },

    componentDidUpdate : function() {
        
        console.log('componentDidUpdate: odpowienik componentDidMount ale po przerenderowaniu komponentu - wysylka danych, manipulacja DOM');
    },

    componentWillUnmount : function() {
        
        console.log('componentWillUnmount: Jesli komponent ma zostac usuniety, ta metoda pozwala na posprzatanie po nim, odpiecie timerow, listenerow, przekazanie danych przed usunieciem.');
    },


    

});


var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));
