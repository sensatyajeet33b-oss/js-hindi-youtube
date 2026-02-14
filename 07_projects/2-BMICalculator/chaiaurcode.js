const result = document.querySelector("#results")

// this would not perform as expected, javascript will fetch this element which would be empty at the beginning and will return the empty string which is not what we expected
// const height = parseInt(document.querySelector('#height').value);

const form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    e.preventDefault(); //do not perform any default operation like sending the response to the server once pressed the submit button

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    if (height <= 0 || isNaN(height) || height === '') {
        result.innerHTML = "Please give a valid height"
    }
    else if (weight <= 0 || isNaN(weight) || weight === '') {
        result.innerHTML = "Please give a valid weight"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        // result.innerHTML = bmi;
        if (bmi < 18.6) {
            result.style.color = "yellow"
            result.innerHTML = `Underweight with BMI=${bmi}`
        }
        else if (bmi < 24.9) {
            result.style.color = "lightgreen"
            result.innerHTML = `Normalweight with BMI=${bmi}`
        }
        else {
            result.style.color = "red"
            result.innerHTML = `Overweight with BMI=${bmi}`
        }


    }
})