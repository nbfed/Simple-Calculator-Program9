import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double num1;
        while (!scanner.hasNextDouble()) {
            System.out.println("Invalid input. Please enter a valid number.");
            scanner.next();
        }
        num1 = scanner.nextDouble();

        System.out.print("Enter second number: ");
        double num2;
        while (!scanner.hasNextDouble()) {
            System.out.println("Invalid input. Please enter a valid number.");
            scanner.next();
        }
        num2 = scanner.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        char operator;
        String input;
        do {
            input = scanner.next();
            if (input.length() != 1 || "+-*/".indexOf(input.charAt(0)) == -1) {
                System.out.println("Invalid operator. Please enter +, -, *, or /.");
            }
        } while (input.length() != 1 || "+-*/".indexOf(input.charAt(0)) == -1);
        operator = input.charAt(0);

        double result;
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("Error: Cannot divide by zero.");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                System.out.println("Invalid operator");
                return;
        }

        System.out.println("Result: " + result);
    }
}
