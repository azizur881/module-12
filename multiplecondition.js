var score= 80;
var attendance= 5;



if(score > 60 && attendance >32){
    console.log('Sorry you cant go to the next semester');

}
else if(score ==85 || score> 85){
    console.log('You got A+');
}
else if(score ==80 || score> 80){
    console.log('You got A');
}

else if( score == 70 || score>70 ){
    console.log('congratulation you get A-');
}

else if( score == 60 || score>60){
    console.log('you get B+');
}

else if(score == 50 || score < 50  ){
    console.log('You failed in final exam better luck next time');
}

else{
    console.log('now you are not  student of this versity dear');
}