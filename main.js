const contacts = [
    {name: 'Fulano', number: '(61)99944-4444'},
    {name: 'Beltrano', number: '(61)98888-4444'},
    {name: 'Siglano', number: '(61)95555-2222'},
    {name: 'Aquino', number: '(61)99111-1111'}
];


function searchContact() {
    const inputSearch = document.querySelector(".input-search-content");
    const nameContact = document.querySelector(".name-result");
    const numberContact = document.querySelector(".phone-result");

    for(let i = 0; i < contacts.length; i++) {
        if(contacts[i].name == inputSearch.value) {
            nameContact.innerHTML = contacts[i].name;
            numberContact.innerHTML = contacts[i].number;
            inputSearch.value = "";
        }
    }
}
