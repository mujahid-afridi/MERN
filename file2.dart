import 'package:flutter/material.dart';
import 'package:practice_project/main.dart';

void main() => runApp(const CoursesPage());

class CoursesPage extends StatelessWidget{
  const CoursesPage({super.key});

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      home : Courses(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class Courses extends StatelessWidget{
  const Courses({super.key});

  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 100,
        backgroundColor: Colors.lightGreen,
        title: const Text("Courses Page", style: TextStyle(fontSize: 30, color: Colors.white, fontWeight: FontWeight.bold),),
      ),
      body : SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
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
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.black,
                  ),
                  onPressed: (){
                    Navigator.pushReplacement(
                      context,
                      MaterialPageRoute(builder: (context)=> HomePage())
                    );
                  },
                  child: Text("Back toHome", style: TextStyle(fontSize: 20, color: Colors.white, fontWeight: FontWeight.bold),),
                )
              ],
            )
          ],
        ),
      ),
    );

  }

}