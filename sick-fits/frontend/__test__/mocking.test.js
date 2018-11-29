function Person(name,item){
    this.name = name
    this.item = item
}

Person.prototype.fetchItem = function(){
    return new Promise((reslove,reject) =>{
        setTimeout(() => reslove(this.item),2000)
     })
}

describe('mocking test',() => {
    it('mock a reg fnc',() => {
        const fetchData = jest.fn();
        fetchData();
        fetchData('item');
        expect(fetchData).toHaveBeenCalled();
        expect(fetchData).toHaveBeenCalledWith('item')
        expect(fetchData).toHaveBeenCalledTimes(2)
    });

    it('create person',() =>{
        const me = new Person('Demo',['book','pen']);
        expect(me.name).toEqual('Demo')
    });

    it('can fetch item',async() => {
        const me = new Person('Demo',['book','pen']);
        me.fetchItem = jest.fn().mockResolvedValue([
            'book', 'phone'
        ]);
        const itemList  = await me.fetchItem();
       //console.log(itemList);
        expect(itemList).toContain('book')
    });
});