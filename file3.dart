import 'package:flutter/material.dart';
import 'package:practice_project/main.dart';

void main()=> runApp(const ProfilePage());

class ProfilePage extends StatelessWidget{
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home : Profile(),
    );
  }
}

class Profile extends StatelessWidget{
  const Profile({super.key});

  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 100,
        backgroundColor: Colors.green,
        title: const Text("Create Account",  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30, color: Colors.white),),
      ),
      body: Padding(
        padding: EdgeInsets.all(10),
        child: Column(
          children: [
            const TextField(
              decoration: InputDecoration(
                labelText: 'Name',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20,),
            const TextField(
              decoration: InputDecoration(
                labelText: 'Email',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20,),
            const TextField(
              decoration: InputDecoration(
                labelText: 'Password',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 20,),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.green,
              ),
              onPressed: (){
                print('Your account has successfully created.');
              },
              child: Text("Submit", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),),
            ),
            SizedBox(height: 20,),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.black,
              ),
              onPressed: (){
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context)=> const HomePage())
                );
              },
              child: Text("Back to Home",  style: TextStyle(fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),),
            )
          ],
        ),
      ),
    );
  }
}