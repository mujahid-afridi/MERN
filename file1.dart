import 'package:flutter/material.dart';
import 'pages/courses.dart';
import 'pages/profile.dart';

void main()=> runApp(const HomePage());

class HomePage extends StatelessWidget{
  const HomePage({super.key});

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home : BuildHomePage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class BuildHomePage extends StatelessWidget{
  const BuildHomePage({super.key});

  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 170,
        backgroundColor: Colors.green,
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.only(
            bottomLeft: Radius.circular(15),
            bottomRight: Radius.circular(15),
          ),
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Icon(Icons.menu, color: Colors.white,),
                Icon(Icons.notification_add, color: Colors.white,)
              ],
            ),
            const SizedBox(height: 20,),
            const Text("Hi Programmer", style: TextStyle(color: Colors.white),),
            const SizedBox(height: 20,),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(
                   child: Container(
                        height: 40,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child : TextField(
                          decoration: InputDecoration(
                              hintText: 'Search here...',
                              prefixIcon: Icon(Icons.search),
                              border: InputBorder.none,
                              contentPadding: EdgeInsets.all(5)
                          ),
                        )
                    )
                )
              ],
            )
          ],
        ),
      ),
      body : SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(height: 40,),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      height: 60,
                      width: 60,
                      decoration: BoxDecoration(
                        color: Colors.orange,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.menu),
                    ),
                    SizedBox(height: 10,),
                    Text("Category", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      height: 60,
                      width: 60,
                      decoration: BoxDecoration(
                        color: Colors.orange,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.menu),
                    ),
                    SizedBox(height: 10,),
                    Text("Category", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      height: 60,
                      width: 60,
                      decoration: BoxDecoration(
                        color: Colors.orange,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.menu),
                    ),
                    SizedBox(height: 10,),
                    Text("Category", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),),
                  ],
                ),
              ],
            ),
            SizedBox(height: 20,),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      height: 60,
                      width: 60,
                      decoration: BoxDecoration(
                        color: Colors.orange,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.menu),
                    ),
                    SizedBox(height: 10,),
                    Text("Category", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      height: 60,
                      width: 60,
                      decoration: BoxDecoration(
                        color: Colors.orange,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.menu),
                    ),
                    SizedBox(height: 10,),
                    Text("Category", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      height: 60,
                      width: 60,
                      decoration: BoxDecoration(
                        color: Colors.orange,
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.menu),
                    ),
                    SizedBox(height: 10,),
                    Text("Category", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold),),
                  ],
                ),
              ],
            ),
            SizedBox(height: 40,),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text("Courses", style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),),
                  Text("See All", style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),),
                ],
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 10),
              child: GridView.count(
                crossAxisCount: 2,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
                padding: EdgeInsets.all(10),
                shrinkWrap: true,
                // physics: NeverScrollableScrollPhysics(),
                children: [
                  Container(
                    height: 220,
                    width: 180,
                    decoration: BoxDecoration(
                      color: Colors.lightGreen,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.network('https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp&w=256', width: 120, height: 120,),
                        SizedBox(height: 5,),
                        Text("Flutter Videos", style: TextStyle(color: Colors.white,fontSize: 20, fontWeight: FontWeight.bold),),
                        SizedBox(height: 5,),
                        Text("55 Videos", style: TextStyle(color: Colors.white),)
                      ],
                    ),
                  ),
                  Container(
                    height: 220,
                    width: 180,
                    decoration: BoxDecoration(
                      color: Colors.lightGreen,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.network('https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp&w=256', width: 120, height: 120,),
                        SizedBox(height: 5,),
                        Text("Flutter Videos", style: TextStyle(color: Colors.white,fontSize: 20, fontWeight: FontWeight.bold),),
                        SizedBox(height: 5,),
                        Text("55 Videos", style: TextStyle(color: Colors.white),)
                      ],
                    ),
                  ),
                  Container(
                    height: 220,
                    width: 180,
                    decoration: BoxDecoration(
                      color: Colors.lightGreen,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.network('https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp&w=256', width: 120, height: 120,),
                        SizedBox(height: 5,),
                        Text("Flutter Videos", style: TextStyle(color: Colors.white,fontSize: 20, fontWeight: FontWeight.bold),),
                        SizedBox(height: 5,),
                        Text("55 Videos", style: TextStyle(color: Colors.white),)
                      ],
                    ),
                  ),
                  Container(
                    height: 220,
                    width: 180,
                    decoration: BoxDecoration(
                      color: Colors.lightGreen,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.network('https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp&w=256', width: 120, height: 120,),
                        SizedBox(height: 5,),
                        Text("Flutter Videos", style: TextStyle(color: Colors.white,fontSize: 20, fontWeight: FontWeight.bold),),
                        SizedBox(height: 5,),
                        Text("55 Videos", style: TextStyle(color: Colors.white),)
                      ],
                    ),
                  ),
                  Container(
                    height: 220,
                    width: 180,
                    decoration: BoxDecoration(
                      color: Colors.lightGreen,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.network('https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp&w=256', width: 120, height: 120,),
                        SizedBox(height: 5,),
                        Text("Flutter Videos", style: TextStyle(color: Colors.white,fontSize: 20, fontWeight: FontWeight.bold),),
                        SizedBox(height: 5,),
                        Text("55 Videos", style: TextStyle(color: Colors.white),)
                      ],
                    ),
                  ),
                  Container(
                    height: 220,
                    width: 180,
                    decoration: BoxDecoration(
                      color: Colors.lightGreen,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Image.network('https://cdn.iconscout.com/icon/free/png-256/free-flutter-logo-icon-download-in-svg-png-gif-file-formats--programming-language-coding-development-logos-icons-1720090.png?f=webp&w=256', width: 120, height: 120,),
                        SizedBox(height: 5,),
                        Text("Flutter Videos", style: TextStyle(color: Colors.white,fontSize: 20, fontWeight: FontWeight.bold),),
                        SizedBox(height: 5,),
                        Text("55 Videos", style: TextStyle(color: Colors.white),)
                      ],
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      ),
      bottomNavigationBar: Container(
        height: 70,
        color: Colors.amber,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Icon(Icons.home),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.transparent,
                shadowColor: Colors.transparent,
              ),
              onPressed: (){
                Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context)=> CoursesPage())
                );
              },
              child: Icon(Icons.menu_book),
            ),
            // Icon(Icons.favorite),
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.transparent,
                shadowColor: Colors.transparent,
              ),
              onPressed: (){
                Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context)=> ProfilePage())
                );
              },
              child: Icon(Icons.account_circle),
            ),
          ],
        )
      )
    );
  }
}

