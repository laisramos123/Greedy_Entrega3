var knapsack=function(capacity,items){
    var ratios = []
    var quantities = []
    
    // coleta a relação valor/tamanho de cada item
    for (var i = 0; i < items.length; ++i) {
       var item = items[i];
       var ratioValue = item[1]/item[0];
       ratios.push({ratio:ratioValue, index:i});     
       quantities.push(0);
    }    
    
    // classifica do "melhor" valor para o "pior" valor
    ratios.sort(
        function(a,b){
            if (a.ratio === b.ratio)
                return 0;
            else if (a.ratio < b.ratio)
                return 1;
            else return -1;
         });
  
    // adiciona itens do melhor para o pior valor até que nenhum mais possa ser adicionado.
    for (var i = 0; i < ratios.length && capacity > 0; ++i) {
       var itemIndex = ratios[i].index;
       var item = items[itemIndex];
       while(item[0] <= capacity) {
          capacity -= item[0];
          quantities[itemIndex]++;
       }     
    }
    return quantities;
  }
