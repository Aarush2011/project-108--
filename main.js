function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LIW8lu2wH/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
dog=0;
cat=0;
lion=0;
cow=0;
function gotResults(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("number_label").innerHTML = 'Detected Dog - '(dog) +  'Detected Cat - '(cat) + 'Detected Lion - '(lion) + 'Detected Cow - '(cow) + (results[0].label);
        document.getElementById("result_label").innerHTML = 'Detected voice is of - ' + (results[0].label);
        document.getElementById("number_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById('ear')

        if(results[0].label == "barking") {
            img.src = 'barking-dogs-barking.gif';
            dog=dog+1;
        }
        else if(results[0].label == "meowing") {
            img.src = 'DiscreteUnlawfulDachshund-size_restricted.gif';
            cat=cat+1;
        }
        else if (results[0].label == "roaring"){
            img.src = 'aslan-roar.gif';
            lion=lion+1;
        }
        else if (results[0].label == "mooing"){
            img.src = 'AmazingImpressiveAlpinegoat-size_restricted.gif';
            cow=cow+1;

        }
        
    }
} 