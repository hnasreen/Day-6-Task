var temp=[]
class Movie{
  constructor(title,studio,rating){
    this.title=title
    this.studio=studio
    this.rating=rating
  }
  print_data(){
    temp.push(this.title,this.studio,this.rating)
    return temp
    }
    getMovie(){
    if(this.rating=="PG")
    {
    temp.push(this.title,this.studio,this.rating)
    return temp
    }
    else
    {
    temp.push(this.title,this.studio)
    return temp
    }}
    setMovie(rating){
      this.rating=rating
}
}
var film1=new Movie("Manjummel Boys","Parava Films","IMDB 8.7")
var res=film1.print_data()
console.log(res)
temp=[]

var film2=new Movie("Blue Star","Neelam Films")
console.log(film2.getMovie())
film2.setMovie("PG")
temp=[]
console.log(film2.print_data())
temp=[]

var film3=new Movie("Casino Royale","Eon Production","PG13")
console.log(film3.print_data())