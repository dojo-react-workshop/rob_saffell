const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random() * 3000 + 1000;


  return new Promise((resolve, reject) => {
    setTimeout( () => {
        const foundItem = warehouse.find((obj) => obj.item === item);

        if (foundItem) {
            resolve(foundItem);
        }

    }, deliveryTime );
  })
}

const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)

const paintReady = orderSupplies('paint');
const brushReady = orderSupplies('brush');

paintReady.then(function(item){
	printItem(item);
	return brushReady;
})
		.then(function(item){
			printItem(item);
		});

//Promise.all([paintReady, brushReady]).then( function(arr) {
//	printItem(arr[0]);
//	printItem(arr[1]);
//	}
//);
