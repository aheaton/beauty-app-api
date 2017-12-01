<h1>Beauty Routine App - API</h1>

<h3>About the App:</h3>
<p>This application allows users to post their beauty routines to share with the world! A user can see everyone else's posts and get some ideas based on the occasion as well as their face shape, skin type, and eye color. Just sign up, log in, and get started!</p>

<h3>Links:</h3>
<p>Beauty Routine Share Site: https://aheaton.github.io/beauty-app-client/</p>
<p>Client Repo on GitHub: https://github.com/aheaton/beauty-app-client</p>
<p>Deployed API: http://beauty-app-api.herokuapp.com/</p>

<h3>API Endpoints:</h3>

<table style="width:30%">
  <tr>
    <th>HTTP Verb</th>
    <th>URI Pattern</th>
    <th>Controller#Action</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/sign-up</td>
    <td>users#signup</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/sign-in</td>
    <td>users#signin</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/sign-out/:id</td>
    <td>users#signout</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>/change-password/:id</td>
    <td>users#changepw</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/routines</td>
    <td>routines#index</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/routines</td>
    <td>routines#create</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/routines/:id</td>
    <td>routines#show</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>/routines/:id</td>
    <td>routines#update</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/routines/:id</td>
    <td>routines#destroy</td>
  </tr>
</table>

<h3>Technologies Used:</h3>
<ul>
<li>Javascript</li>
<li>Express</li>
<li>Node.js</li>
<li>MongoDB</li>
<li>mLab</li>
<li>Mongoose</li>
<li>Heroku</li>
</ul>

<h3>Planning and Strategy:</h3>
<p>I came up with the following plan of action in approaching my project:</p>
<ol>
<li>Test user authentication CRUD on backend via Postman</li>
<li>Setup auth on front-end</li>
<li>Setup basic layout on frontend for routine screens, such as tab structure</li>
<li>Code up and test routine on backend via Postman</li>
<li>Tie backend into frontend and build out screens further</li>
<li>Complete styling and enhance user experience</li>
</ol>
<p>As I was confronted with challenges, I consulted various online resources such as Stack Overflow. Also, reaching out to fellow developers with experience building out various features, such as tabs, was helpful.</p>

<h3>Future Fixes and Enhancements:</h3>
<ul>
<li>Implement an upvoting feature</li>
<li>Allow users to save routines as favorites and access via a separate tab or filter</li>
<li>Allow users to search routines based on various criteria such as routine type</li>
</ul>

<h3>ERD:</h3>
<p>https://i.imgur.com/VzNA3wi.png</p>

<h3>How To Install Dependencies:</h3>
<p>Dependencies need to be installed on the front-end repo via 'npm install'</p>
