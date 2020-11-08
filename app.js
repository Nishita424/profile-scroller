const data = [
  {
    name: 'Hannah Parker',
    age: 23,
    gender: 'female',
    location: 'Berlin',
    image: 'https://randomuser.me/api/portraits/women/81.jpg',
  },
  {
    name: 'Kelly Quinn',
    age: 31,
    gender: 'female',
    location: 'NewYork',
    image: 'https://randomuser.me/api/portraits/women/87.jpg',
  },
  {
    name: 'Darbie Kent',
    age: 28,
    gender: 'female',
    location: 'Sydney',
    image: 'https://randomuser.me/api/portraits/women/84.jpg',
  },
  {
    name: 'Jake Drako',
    age: 32,
    gender: 'male',
    location: 'Boston',
    image: 'https://randomuser.me/api/portraits/men/81.jpg',
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(e) {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>`;

    document.getElementById(
      'imageDisplay'
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
