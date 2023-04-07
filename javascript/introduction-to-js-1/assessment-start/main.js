const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const names = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas",
]

const places = [
    "the soup kitchen",
    "Disneyland",
    "the White House",
]

const activities = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
]

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(names);
    const yItem = randomValueFromArray(places);
    const zItem = randomValueFromArray(activities);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name)
    }


    if (document.getElementById("uk").checked) {
        const weight = Math.round(300*0.071429);
        const temperature = Math.round((94-32)*5/9);
        newStory.replaceAll("300 pounds", weight.toString() + " stone");
        newStory.replaceAll("94 fahrenheit", temperature).toString() + " centigrade";
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
