<?php
require_once 'vendor/autoload.php'; // Include Stripe PHP library

\Stripe\Stripe::setApiKey('your_secret_api_key'); // Set your secret API key

$input = file_get_contents('php://input');
$data = json_decode($input, true);

try {
    $paymentMethodId = $data['payment_method_id'];

    // Create a PaymentIntent to confirm the payment
    $paymentIntent = \Stripe\PaymentIntent::create([
        'payment_method' => $paymentMethodId,
        'amount' => 1000, // Amount in cents (e.g., $10.00)
        'currency' => 'usd',
        'confirmation_method' => 'manual',
        'confirm' => true,
    ]);

    // Return success response
    http_response_code(200);
    echo json_encode(['message' => 'Payment successful', 'payment_intent_id' => $paymentIntent->id]);
} catch (Exception $e) {
    // Return error response
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
