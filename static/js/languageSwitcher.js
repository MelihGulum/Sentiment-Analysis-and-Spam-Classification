const langEl= document.querySelector('.langWrap');
const link= document.querySelectorAll('a');

const sentiment_titleEl= document.querySelector('.sentiment_title');
const sentiment_descriptionEl= document.querySelector('.sentiment_description');
const spam_titleEl= document.querySelector('.spam_title');
const spam_descriptionEl= document.querySelector('.spam_description');
const dataset_titleEl= document.querySelector('.dataset_title');
const dataset_descriptionEl= document.querySelector('.dataset_description');

const homeEl= document.querySelector('.home');
const aboutEl= document.querySelector('.about');
const contactEl= document.querySelector('.contact');
const projectEl= document.querySelector('.project');

const btnEl= document.querySelector('.btn');
const btn2El= document.querySelector('.btn2');
const btn3El= document.querySelector('.btn3');


link.forEach(el => {
            el.addEventListener('click', () => {
                langEl.querySelector('.active').classList.remove('active');
                el.classList.add('active');

                const attr = el.getAttribute('language');

                sentiment_titleEl.textContent = data[attr].sentiment_title;
                sentiment_descriptionEl.textContent = data[attr].sentiment_description;

                spam_titleEl.textContent = data[attr].spam_title;
                spam_descriptionEl.textContent = data[attr].spam_description;

                dataset_titleEl.textContent = data[attr].dataset_title;
                dataset_descriptionEl.textContent = data[attr].dataset_description;

                homeEl.textContent = data[attr].home;
                aboutEl.textContent = data[attr].about;
                contactEl.textContent = data[attr].contact;
                projectEl.textContent = data[attr].project;

                btnEl.textContent = data[attr].btn;
                btn2El.textContent = data[attr].btn2;
                btn3El.textContent = data[attr].btn3;
            });
});

var data = {
        "english":
        {
            "sentiment_title": "Sentiment Anlaysis",
            "sentiment_description":
                    "Could not you decide the sentence is whether good or bad? We know it is difficult to decides sometimes.Let us help you with our Deep Learning model which has %79 Accuracy.",

            "spam_title":"Spam Classification",
            "spam_description":"Did you ever take ridiculous message from the person who you do not know? If your answer 'yes', than this message probably is spam. Do you want to know which one is spam?",

            "dataset_title":"About Datasets",
            "dataset_description":"We use two different dataset in these projects. Sentiment dataset consist of 1.6 million data. On the other hand the other dataset, spam dataset, has 5572 data.",

            "home":"Home",
            "about":"About",
            "contact":"Contact",
            "project":"Project",

            "btn":"Learn",
            "btn2":"Learn",
            "btn3":"Sentiment",
        },
        "turkish":
        {
            "sentiment_title": "Duygu Analizi",
            "sentiment_description":"C??mlelerin olumlu ya da olumsuz oldu??una karar veremediniz mi? Bu karar?? vermenin bazen zor oldu??unu anl??yoruz. %79 ba??ar??m oran??na sahip Derin ????renme modelimiz ile size yard??m edelim.",

            "spam_title":"Spam S??n??fland??rma",
            "spam_description":"Tan??mad??????n??z ki??ilerden sa??ma mesajlardan ald??????n??z oldu mu? Cevab??n??z e??er 'evet' ise bu mesaj b??y??k ihtimalle spam. Hangi mesaj??n spam olup   olmad??????n?? ????renmek ister misiniz?",

            "dataset_title":"Veri Setleri",
            "dataset_description":"Bu projede iki farkl?? veri seti kulland??k. Duygu veri seti 1.6 milyon veriden olu??maktad??r. Di??er taraftan spam veri setimiz ise 5571 veriden meydana gelmektedir.",

            "home":"Ana Sayfa",
            "about":"Hakk??m??zda",
            "contact":"??let??????m",
            "project":"Proje",

            "btn":"????ren",
            "btn2":"????ren",
            "btn3":"Duygu",
        }

}

/*                 window.alert()     */


function sentiment_alert() {
  alert("We need time to solve it.");
}

function dataset_alert() {
  alert("Please wait. It's trying to randomly display data.");
}
