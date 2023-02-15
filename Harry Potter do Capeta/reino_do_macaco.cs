using System;
using static System.Console;

namespace test
{
    class Test
    {
        public static void Main(string[] args)
        {
            Clear();
            WriteLine("-------------------");
            WriteLine("| Reino do macaco |");
            WriteLine("-------------------");
            WriteLine();
            WriteLine("O (pior) JOGO");
            Thread.Sleep(3000);
            loadingScreen("Selva Selvagem");
            nivel1();
        }
        public static void loadingScreen(string levelname)
        {
            int counter = new Random().Next(31);
            char[] animChar = new char[4] {'\\', '|', '/', '-' };
            int animCharIndex = 0;
            for (; counter > 0; counter--) {
                Clear();
                WriteLine($"Carregando \"{levelname}\" {animChar[animCharIndex]}");
                WriteLine();
                WriteLine("Por favor aguarde (sem precisão nenhuma kkkkk)");
                animCharIndex++;
                if (animCharIndex > 3) animCharIndex = 0;
                Thread.Sleep(200);
            }
            Thread.Sleep(250);
        }
        public static void Type(string s, int span)
        {
            for (int i = 0; i < s.Length; i++)
            {
                Write(s[i]);
                Thread.Sleep(span);
            }
        }
        public static void nivel1()
        {
            Clear();
            Type("É uma manhã bela demais para uma horrorosa selva como esta," +
                " o último lugar que qualquer naturalista ou explorador gostaria de estar, por mais corajosos que estes sejam.", 10);
            ReadKey();
            
            Clear();
            Type("Não interprete errado, a selva não aspira ares de medo, mas sim de tristeza. ", 15);
            Type("A selva perdeu sua essência...", 30);
            ReadKey();

            Clear();
            Type("Animais pranteam com todas suas forças, desde os pequenos bezerros até os filhotes das leoas.", 10);
            ReadKey();

            Clear();
            Type("Toda a vida presente neste lugar sentiu a perda da grande dríade, a guardiã da selva de [nome de selva kkkkk], ", 25);
            Thread.Sleep(1000);
            Type("isto é, com exceção dos humanos, é claro, pois o homens são os únicos seres que só se entristecem com a morte deles mesmos.", 10);
            ReadLine();
        }
    }
}
