/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
var gitDefinition = 'Git is an open source DevOps code managment software used mainly for tracking changes in source code, it allows multiple devlopers to work on projects big or small together through non-linear devlopment.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubDefinition = 'GitHub is a web interface that uses Git. It allows for multiple Devs to collaberate on one project through public repositories. It also allows you to save and access files remotely'
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/
var gitInitDefinition = 'git init is a command within the terminal that creates an empty repository in the folder you have the terminal pointed to. Without git init you cannot use git commands on your project'

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
var gitCloneDefinition = 'This command is used to target an existing git repository and created a copy of it'
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
var gitStatusDefinition = 'This command shows the status of the current directory you are working on as well as the staging area'
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
var gitAddDefinition = 'Gitadd will add any changes youve made in your source code to your working directory and adds them to the staging area '    

var gitAddCode = 'git add -u'
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
var gitCommitDefinition = 'Git commit is a safe way to save code without pushing it to github. It also allows you to add a dectiption to all of the changes youve made since your last save'

var gitCommitCode = 'git commit -am "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
var gitPushDefinition = 'git push is used to upload your local source code repository to the remote repository on github'