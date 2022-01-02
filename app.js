jQuery("#info-submit-btn").prop('disabled', true);

var toValidate = jQuery('#last-menstruation, #start-menstruation, #cycle-length'),
    valid = false;
toValidate.keyup(function() {
    if (jQuery(this).val().length > 0) {
        jQuery(this).data('valid', true);
    } else {
        jQuery(this).data('valid', false);
    }
    toValidate.each(function() {
        if (jQuery(this).data('valid') == true) {
            valid = true;
        } else {
            valid = false;
        }
    });
    if (valid === true) {
        jQuery('#info-submit-btn').prop('disabled', false);
    } else {
        jQuery('#info-submit-btn').prop('disabled', true);
    }
});

function checkInput() {
    var date = new Date($('#last-menstruation').val());
    var dateText = date.getTime();
    var dateInput = new Date(dateText);
    var heading = document.createElement("h2");
    var dd = dateInput.getDate();
    var mm = dateInput.getMonth() + 1;
    var yyyy = dateInput.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    heading.innerHTML = dd + '/' + mm + '/' + yyyy;
    document.getElementById('text-div').appendChild(heading);
}

//For IUD para
$('#iudPara').on('hidden.bs.collapse', function() {
    $('#iud-read-more').text('Read more');
});
$('#iudPara').on('shown.bs.collapse', function() {
    $('#iud-read-more').text('Read less');
});

//For abstinence Para
$('#abstinencePara').on('hidden.bs.collapse', function() {
    $('#abstinence-read-more').text('Read more');
});
$('#abstinencePara').on('shown.bs.collapse', function() {
    $('#abstinence-read-more').text('Read less');
});

//For withdrawal Para
$('#withdrawalPara').on('hidden.bs.collapse', function() {
    $('#withdrawal-read-more').text('Read more');
});
$('#withdrawalPara').on('shown.bs.collapse', function() {
    $('#withdrawal-read-more').text('Read less');
});

//For BreastFeeding para
$('#breastfeedingPara').on('hidden.bs.collapse', function() {
    $('#breastfeeding-read-more').text('Read more');
});
$('#breastfeedingPara').on('shown.bs.collapse', function() {
    $('#breastfeeding-read-more').text('Read less');
});

//For male condoms Para
$('#maleCondomPara').on('hidden.bs.collapse', function() {
    $("#maleCondom-read-more").text('Read more');
});
$('#maleCondomPara').on('shown.bs.collapse', function() {
    $("#maleCondom-read-more").text('Read less');
});

//For spermicidal agent Para
$('#spermicidalPara').on('hidden.bs.collapse', function() {
    $('#spermicidal-read-more').text('Read more');
});
$('#spermicidalPara').on('shown.bs.collapse', function() {
    $('#spermicidal-read-more').text('Read less');
});

//For Diaphragm Para
$('#diaphragmPara').on('hidden.bs.collapse', function() {
    $('#diaphragm-read-more').text('Read more');
});
$('#diaphragmPara').on('shown.bs.collapse', function() {
    $('#diaphragm-read-more').text('Read less');
});

//For Female Condom Para
$('#femaleCondomPara').on('hidden.bs.collapse', function() {
    $('#femaleCondom-read-more').text('Read more');
});
$('#femaleCondomPara').on('shown.bs.collapse', function() {
    $('#femaleCondom-read-more').text('Read less');
});

//For Ovulation Suppression with hormones
$('#pillsPara').on('hidden.bs.collapse', function() {
    $('#pillsPara-read-more').text('Read more');
});
$('#pillsPara').on('shown.bs.collapse', function() {
    $('#pillsPara-read-more').text('Read less');
});

$('#malaPara').on('hidden.bs.collapse', function() {
    $('#malaPara-read-more').text('Read more');
});
$('#malaPara').on('shown.bs.collapse', function() {
    $('#malaPara-read-more').text('Read less');
});

$('#forgotPara').on('hidden.bs.collapse', function() {
    $('#forgotPara-read-more').text('What if you forgot to take pill');
});
$('#forgotPara').on('show.bs.collapse', function() {
    $('#forgotPara-read-more').text('Read less');
});

//For emergency contraceptive pills
$('#emergencyPara').on('hidden.bs.collapse', function() {
    $('#emergencyPara-read-more').text('Read more');
});
$('#emergencyPara').on('shown.bs.collapse', function() {
    $('#emergencyPara-read-more').text('Read less');
});

//For sterilization para
$('#sterilizationPara').on('hidden.bs.collapse', function() {
    $('#sterilizationPara-read-more').text('Read more');
});
$('#sterilizationPara').on('shown.bs.collapse', function() {
    $('#sterilizationPara-read-more').text('Read less');
});

//Male Sterilization Para
$('#male-sterilizationPara').on('hidden.bs.collapse', function() {
    $('#male-sterilizationPara-read-more').text('Read more');
});
$('#male-sterilizationPara').on('shown.bs.collapse', function() {
    $('#male-sterilizationPara-read-more').text('Read less');
});

//Female Sterilization Para
$('#female-sterilizationPara').on('hidden.bs.collapse', function() {
    $('#female-sterilizationPara-read-more').text('Read more');
})
$('#female-sterilizationPara').on('shown.bs.collapse', function() {
    $('#female-sterilizationPara-read-more').text('Read less');
})

/*TODO: 1st what I need to do is: on button click first import data from filled entities and then
play the video then On video end after 3 sec hide the video div and then show the events div with
dates changed.

//TODO: To change the date, after video ends, calculateDate() Function performed. Within change date
The starting date of menstruation will be in sec then for
//TODO: Menses: starting date: Entered starting date...
        Ending date: starting date+ (1day * durationOfMenses);

//TODO: Ovulation day: idealDay = starting date + (1day *  (cycleLength-14));
        OvulationRange = idealDay -(1day * 2); to about idealDay + (1day * 2);

//TODO: Fertile period: starting day: idealOvulationDay - (1day * 7);
        ending day: idealOvulationDay + (1day * 5);

//TODO: Post-Ovulatory period: starting day: endingFertileDay + (1day);
        ending day: mensesStartingDate + (1day * cycleLength);

//TODO: Pre-Ovulatory: Starting Date: MensesEnding + (1day);
        ending date: FertileStartingDate - (1day);

//TODO: After this in changeDate() function, change the span tags.
*/

var startingDate = 0;
var mensesLength = 0;
var cycleLength = 0;
var oneDay = 86400000;


var mensesStarting, mensesEnding, preOvulatoryStarting, preOvulatoryEnding, idealOvulationDate,
    fertileStarting, fertileEnding, postOvulatoryStarting, postOvulatoryEnding, fertileEndingTime,
    mensesEndingTime, fertileStartingTime;

function submitFunction() {
    importData();
    prepareEvents();
}

function importData() {
    var enteredStartDate = new Date(document.getElementById('start-menstruation').value);
    startingDate = enteredStartDate.getTime();

    mensesLength = parseInt(document.getElementById('menstruation-length').value);

    cycleLength = parseInt(document.getElementById('cycle-length').value);
}

function prepareEvents() {
    calculateDates();
    changeDates();
    displayEventDiv();
}

function calculateDates() {
    calculateMenses();
    calculateFertile();
    calculatePostOvulatory();
    calculatePreOvulatory();
}

function changeDates() {
    //For Menses Span
    document.getElementById('menses-start').innerHTML = mensesStarting;
    document.getElementById('menses-end').innerHTML = mensesEnding;
    //For PreOvulatory Span
    document.getElementById('pre-ovulatory-start').innerHTML = preOvulatoryStarting;
    document.getElementById('pre-ovulatory-end').innerHTML = preOvulatoryEnding;
    //For Fertile period Span
    document.getElementById('fertile-period-start').innerHTML = fertileStarting;
    document.getElementById('fertile-period-end').innerHTML = fertileEnding;
    //For PostOvulatory Span
    document.getElementById('post-ovulatory-start').innerHTML = postOvulatoryStarting;
    document.getElementById('post-ovulatory-end').innerHTML = postOvulatoryEnding;
}


function displayEventDiv() {
    document.getElementById('info-collection-div').classList.add('d-none');
    document.getElementById('info-collection-div').classList.add('hide');
    document.getElementById('events-cards-container').classList.remove('hide');
    document.getElementById('events-cards-container').classList.remove('d-none');
    document.getElementById('alert-div').classList.remove('hide', 'd-none');
}


function contraceptionPage() {
    window.location.href = "contraception.html";
}

function homePage() {
    window.location.href = "home.html";
}

//Calculation of Cycle events duration:

function calculateMenses() {
    let mensesStartingTime = startingDate;
    mensesEndingTime = startingDate + (oneDay * mensesLength);
    let mensesStartingDate = new Date(mensesStartingTime);
    let mensesEndingDate = new Date(mensesEndingTime);

    let starting_dd = mensesStartingDate.getDate();
    let starting_mm = mensesStartingDate.getMonth() + 1;
    let starting_yyyy = mensesStartingDate.getFullYear();

    if (starting_dd < 10) {
        starting_dd = '0' + starting_dd;
    }
    if (starting_mm < 10) {
        starting_mm = '0' + starting_mm;
    }

    let ending_dd = mensesEndingDate.getDate();
    let ending_mm = mensesEndingDate.getMonth() + 1;
    let ending_yyyy = mensesEndingDate.getFullYear();

    if (ending_dd < 10) {
        ending_dd = '0' + ending_dd;
    }
    if (ending_mm < 10) {
        ending_mm = '0' + ending_mm;
    }
    mensesStarting = starting_dd + '/' + starting_mm + '/' + starting_yyyy;
    mensesEnding = ending_dd + '/' + ending_mm + '/' + ending_yyyy;
    console.log(mensesStarting + " to " + mensesEnding);
}

function calculatePreOvulatory() {
    let preOvulatoryStartingTime = mensesEndingTime + oneDay;
    let preOvulatoryEndingTime = fertileStartingTime - oneDay;

    let preOvulatoryStartingDate = new Date(preOvulatoryStartingTime);
    let preOvulatoryEndingDate = new Date(preOvulatoryEndingTime);

    let starting_dd = preOvulatoryStartingDate.getDate();
    let starting_mm = preOvulatoryStartingDate.getMonth() + 1;
    let starting_yyyy = preOvulatoryStartingDate.getFullYear();

    if (starting_dd < 10) {
        starting_dd = '0' + starting_dd;
    }

    if (starting_mm < 10) {
        starting_mm = '0' + starting_mm;
    }

    let ending_dd = preOvulatoryEndingDate.getDate();
    let ending_mm = preOvulatoryEndingDate.getMonth() + 1;
    let ending_yyyy = preOvulatoryEndingDate.getFullYear();

    if (ending_dd < 10) {
        ending_dd = '0' + ending_dd;
    }
    if (ending_mm < 10) {
        ending_mm = '0' + ending_mm;
    }

    preOvulatoryStarting = starting_dd + '/' + starting_mm + '/' + starting_yyyy;
    preOvulatoryEnding = ending_dd + '/' + ending_mm + '/' + ending_yyyy;

    console.log(preOvulatoryStarting + " to " + preOvulatoryEnding);
}

function calculateFertile() {
    idealOvulationDate = startingDate + (oneDay * (cycleLength - 14));
    fertileStartingTime = idealOvulationDate - (oneDay * 5);
    fertileEndingTime = idealOvulationDate + (oneDay * 5);

    let fertileStartingDate = new Date(fertileStartingTime);
    let fertileEndingDate = new Date(fertileEndingTime);

    starting_dd = fertileStartingDate.getDate();
    starting_mm = fertileStartingDate.getMonth() + 1;
    starting_yyyy = fertileStartingDate.getFullYear();

    if (starting_dd < 10) {
        starting_dd = '0' + starting_dd;
    }
    if (starting_mm < 10) {
        starting_mm = '0' + starting_mm;
    }

    ending_dd = fertileEndingDate.getDate();
    ending_mm = fertileEndingDate.getMonth() + 1;
    ending_yyyy = fertileEndingDate.getFullYear();

    if (ending_dd < 10) {
        ending_dd = '0' + ending_dd;
    }
    if (ending_mm < 10) {
        ending_mm = '0' + ending_mm;
    }

    fertileStarting = starting_dd + '/' + starting_mm + '/' + starting_yyyy;
    fertileEnding = ending_dd + '/' + ending_mm + '/' + ending_yyyy;

    console.log(fertileStarting + " to " + fertileEnding);
}

function calculatePostOvulatory() {
    let postOvulatoryStartingTime = fertileEndingTime + oneDay;
    let postOvulatoryEndingTime = startingDate + (oneDay * cycleLength);

    let postOvulatoryStartingDate = new Date(postOvulatoryStartingTime);
    let postOvulatoryEndingDate = new Date(postOvulatoryEndingTime);

    let starting_dd = postOvulatoryStartingDate.getDate();
    let starting_mm = postOvulatoryStartingDate.getMonth() + 1;
    let starting_yyyy = postOvulatoryStartingDate.getFullYear();

    if (starting_dd < 10) {
        starting_dd = '0' + starting_dd;
    }
    if (starting_mm < 10) {
        starting_mm = '0' + starting_mm;
    }

    let ending_dd = postOvulatoryEndingDate.getDate();
    let ending_mm = postOvulatoryEndingDate.getMonth() + 1;
    let ending_yyyy = postOvulatoryEndingDate.getFullYear();

    if (ending_dd < 10) {
        ending_dd = '0' + ending_dd;
    }
    if (ending_mm < 10) {
        ending_mm = '0' + ending_mm;
    }

    postOvulatoryStarting = starting_dd + '/' + starting_mm + '/' + starting_yyyy;
    postOvulatoryEnding = ending_dd + '/' + ending_mm + '/' + ending_yyyy;

    console.log(postOvulatoryStarting + ' to ' + postOvulatoryEnding);
}