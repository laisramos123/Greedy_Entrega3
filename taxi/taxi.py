def min_num_taxis(requests):
    events = []
    for start, end in requests:
        events.append((start, 1))  # indica o início do pedido do cliente
        events.append((end, -1))  # indica o término do pedido do cliente

    events.sort()  # classifica os eventos por ordem de tempo

    num_taxis = 0
    max_taxis = 0
    for _, delta in events:
        num_taxis += delta
        max_taxis = max(max_taxis, num_taxis)

    return max_taxis

# Exemplo de uso:
requests = [(1, 4), (2, 6)]
print(min_num_taxis(requests))  # Saída: 2

requests = [(1, 4), (5, 9)]
print(min_num_taxis(requests))  # Saída: 1