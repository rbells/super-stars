package profilemanagement;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.Scanner;

public class ProfileManagement {
    
    public static void main(String[] args) {
        //Choose to Sign Up or Sign In
        Scanner cin = new Scanner(System.in);
        System.out.println("0 to Sign In, 1 to Create new account, 2 to exit");
        int selection = cin.nextInt();
        
        while(selection != 2){
            switch (selection) {
                case 0:
                    signIn();
                    selection = 2;
                    break;
                case 1:
                    signUp();
                    selection = 3;
                    break;
                case 2: 
                    System.out.println("Exit");
                    break;
                default:
 
                    System.out.println("0 to Sign In, 1 to Create new account, 2 to exit");
                    selection = cin.nextInt();
                    break;
            }
        }        
    }
    
    private static void signUp(){
        //Prepare Strings used to connect to db
        String url = "jdbc:mysql://localhost:3306/userdb";
        String usernameDB = "root";
        String passwordDB = "cheese";
        
        Scanner cin = new Scanner(System.in);
        System.out.println("Pick a username");
        String username = cin.next();
        System.out.println("Pick a password");
        String password = cin.next();
        System.out.println("Enter your first name");
        String firstName = cin.next();
        System.out.println("Enter your last name");
        String lastName = cin.next();
        
        try {
            Connection connection = DriverManager.getConnection(url, usernameDB, passwordDB);
            String sql = "INSERT INTO users (username, password, firstName, lastName)"
                    + " VALUES (?, ?, ?, ?)";
            
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, username);
            statement.setString(2, password);
            statement.setString(3, firstName);
            statement.setString(4, lastName);
            
            int rows = statement.executeUpdate();
            if (rows > 0){
                System.out.println("A row has been added");
            }
       
            statement.close();
            connection.close();
            
        } catch (SQLException ex) {
            System.out.println("Could not connect to the database");
            Logger.getLogger(ProfileManagement.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    private static void signIn(){
        //Prepare Strings used to connect to db
        String url = "jdbc:mysql://localhost:3306/userdb";
        String usernameDB = "root";
        String passwordDB = "cheese";
        
        Boolean signedIn = false;
        
        Scanner cin = new Scanner(System.in);
        System.out.println("Enter your username");
        String givenUsername = cin.next();
        System.out.println("Enter your password");
        String givenPassword = cin.next();
        
        try {
            Connection connection = DriverManager.getConnection(url, usernameDB, passwordDB);
            String sql = "SELECT * FROM users";
            Statement statement = connection.createStatement();
            ResultSet result = statement.executeQuery(sql);
            
            while (result.next() && (signedIn == false)){
                String username = result.getString("username");
                String password = result.getString("password");
                if(username.compareTo(givenUsername) == 0){
                    if(password.compareTo(givenPassword) == 0){
                        signedIn = true;
                        System.out.println("Hello " + result.getString("firstName"));
                    }
                }
            }   
            statement.close();
            connection.close();
            
        } catch (SQLException ex) {
            System.out.println("Could not connect to the database");
            Logger.getLogger(ProfileManagement.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        if (signedIn == false){
            System.out.println("Wrong username or password");
        }
    }    
}
