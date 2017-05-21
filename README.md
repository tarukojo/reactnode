# reactnode
React projekti, Writing exercise

This application is a kind of writing exercise game. 
The application offers a component to write. 
Every letter the user types right, is shown as green. Every letter the user types wrong, is shown as red.
When the typing is right, the user sees a feedback message that everything is right. Otherwise the message says it is going wrong. The application collects statistical information like typo amount. When the typed sentence is ready, there appears "Seuraava" button for getting the next sentence.

Installation And Usage:
Download the project source, and type "npm install". Use by typing "npm start".

Tests:
Run the tests by typing "npm test".

Limitations:
- The typing is checked only the last character in the end of the typed sentence.
- Only one sentence is provided.

Known bugs:
- The letters and feedback appear into the screen one letter behind the typing.
- "Seuraava" button is not giving the next sentence because this feature is not implemented yet (see Future features). It only nulls everything.

Future features:
- Administrator of the application can insert new sentences that the user can then exercise to write.
- The application collects information about used time.
- "Seuraava" button gives the next new sentence.