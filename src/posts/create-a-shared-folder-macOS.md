---
date: 2023-08-27
layout: post.njk
tags:
- post
draft: true
title: Create a shared folder on mac OS

---

1. Create the folder in a location that makes sense. For example, you can create it in `/Users/Shared` directory
which is designed for shared content.
In your Terminal type the following command to crete the shared folder

`
sudo mkdir -p /Users/Shared/technotes

`
[comment]: # (TODO: Explain why we are using sudo)

Replace `technotes` with your desired folder name

2. Set Group ownership:
You can create a group that includes all the users who need access to the shared folder. Then assign ownership of the folder to that group. LEt's call this group `techies`
`
sudo dseditgroup -o create techies
sudo chown :techies /Users/Shared/technotes

`

3. Add Users to the Group:
Add the user profiles that should have access to the shared folder to the newly created group. Let's assume we have a profile with username `esinam`

`
sudo dseditgroup -o edit -a esinam -t user techies
`

4. Set Folder Permissions:
Set the appropriate permissions for the shared folder to allow group members to access it

`
sudo chmod 770 /Users/Shared/technotes
`

The `770` permissions ensure that the owner and the group members have read, write, and execute access to the folder.

Now, users who are part of the shared group should be able to access the folder and its contents. They can read, write, and manage files within the shared folder.

