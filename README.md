In my Git assignment, I encountered several challenges while working with git push, pull, merge, and managing branches.
Initially, when I was trying to push my changes to the remote repository, 
I faced an error that said "rejected – non-fast-forward." After some searching online, I 
learned this happens when my local branch is behind the remote branch. I solved 
it by running git pull origin branch_name to sync my local and remote repositories before pushing again.

Another issue occurred during merging. I was trying to merge two branches, but I kept getting merge conflicts, especially in files like index.html.
I had difficulty understanding how to resolve them at first. My brother suggested I carefully review both conflicting sections and decide
which changes to keep or combine. Using the conflict markers <<<<<<<, =======, and >>>>>>>, I edited the file,
accepted the correct changes, and committed the resolution.

Lastly, I struggled with pushing 
changes after resolving conflicts. The terminal wouldn’t 
allow me to push until I realized that I hadn’t committed the merge. A quick search online showed me I needed to run git commit after resolving the conflict, and then git push worked smoothly.






