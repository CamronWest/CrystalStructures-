def unique_in_order(sequence):
    
    sequence_chars = []

    sequence_set = sorted(set(sequence))

    sequence_chars = [c for c in sequence_set]

    print(sequence_chars)        

unique_in_order("ABBCcA")