class Food {
 constructor(){
   this.foodS = 0;
   this.lastFood= 0;
   this.Image = loadImage("Milk.png")
 }

 getFoodStock(){
    var foodvalue = database.ref('food')
    foodvalue.on("value",function(data){
        foodStock = data.val();
    })
 }
 display(){
      
    var x = 80, y = 100

    imageMode(CENTER)

    if (this.foodS != 0)
    {
     for(var i=0;i<this.foodS;i++)   
     {
    if(i%10==0)
    {
     x= 80;
     y=y+50
    }
     image(this.Image,x,y,50,50)
     x=x+30
     }
   }
  }
}
