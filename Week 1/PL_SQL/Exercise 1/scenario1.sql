DECLARE
    CURSOR cust_cursor IS
        SELECT c.customer_id, c.age, l.loan_id, l.interest_rate
        FROM CUSTOMERS c
        JOIN LOANS l ON c.customer_id = l.customer_id;

BEGIN
    FOR rec IN cust_cursor LOOP
        IF rec.age > 60 THEN
            UPDATE LOANS
            SET interest_rate = rec.interest_rate - 1
            WHERE loan_id = rec.loan_id;

            DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: ' || rec.customer_id);
        END IF;
    END LOOP;

    COMMIT;
END;
/